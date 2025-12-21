# Some notes on deploy

## Replace date in myst project with latest deploy date
In deploy, set:

```{yml}
    # setting the date to today
     - name: generate date
       shell: bash
       run: |
         BUILD_DATE="$(date +'%Y-%m-%d')"          
         sed -i "s|\${BUILD_DATE}|${BUILD_DATE}|g" myst.yml
         echo "myst.yml:"
         grep -nE '^\s*date:' myst.yml
```

## Add python 

```{yml}
      - name: Set up Python
        uses: actions/setup-python@v5
        with:
          #https://github.com/actions/setup-python?tab=readme-ov-file#caching-packages-dependencies
          python-version: '3.11'   # or your version
          # cache: 'pip' #

      - name: Install Python dependencies
        run: |
          python -m pip install --upgrade pip
          # If you have a requirements file, prefer that:
          if [ -f requirements.txt ]; then pip install -r requirements.txt; fi
          # Minimum needed for execution:
          pip install jupyter-server nbclient nbformat ipykernel jupyter-client ipython
          # Common plotting libs (adjust to your stack):
          pip install matplotlib numpy pandas scipy plotly
          # If you use plotly static images:
          # pip install plotly kaleido
          # Make sure a kernel is visible:
          python -m ipykernel install --user --name=python3

```